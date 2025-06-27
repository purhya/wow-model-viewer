import {getCharacterOptions} from "./character_modeling.js"


// eslint-disable-next-line no-undef
class WowModelViewer extends ZamModelViewer {
    /**
     * Returns the list of animation names
     * @returns {Array.<string>}
     */
    getListAnimations() {
        console.log(`getListAnimations`)
        return [...new Set(this.renderer.models[0].aq.map(e => e.l))]
    }

    /**
     * Change character distance
     * @param {number} val
     */
    setDistance(val) {
        this.renderer.distance = val
    }

    /**
     * Change the animation
     * @param {string} val
     */
    setAnimation(val) {
        if (!this.getListAnimations().includes(val)) {
            console.warn(`${this.constructor.name}: Animation ${val} not found`)
        }
        this.renderer.models[0].setAnimation(val)
    }

    /**
     * Play / Pause the animation
     * @param {boolean} val
     */
    setAnimPaused(val) {
        this.renderer.models[0].setAnimPaused(val)
    }

    /**
     * Set azimuth value this value is the angle to the azimuth based on PI
     * @param {number} val
     */
    setAzimuth(val) {
        this.renderer.azimuth = val
    }

    /**
     * Set zenith value this value is the angle to the azimuth based on PI
     * @param {number} val
     */
    setZenith(val) {
        this.renderer.zenith = val
    }

    /**
     * Returns azimuth value this value is the angle to the azimuth based on PI
     * @return {number}
     */
    getAzimuth() {
        return this.renderer.azimuth
    }

    /**
     * Returns zenith value this value is the angle to the azimuth based on PI
     * @return {number}
     */
    getZenith() {
        return this.renderer.zenith
    }

    /**
     * This methode is based on `updateViewer` from Paperdoll.js (https://wow.zamimg.com/js/Paperdoll.js?3ee7ec5121)
     *
     * @param slot {number}: Item slot number
     * @param displayId {number}: Item display id
     * @param enchant {number}: Enchant (experimental not tested)
     */
    updateItemViewer(slot, displayId, enchant) {
        const s = window.WH.Wow.Item
        if (slot === s.INVENTORY_TYPE_SHOULDERS) {
            // this.method(`setShouldersOverride`, [this.getShouldersOverrideData()]);
        }
        const a = (slot === s.INVENTORY_TYPE_ROBE) ? s.INVENTORY_TYPE_CHEST : slot

        window.WH.debug(`Clearing model viewer slot:`, a.toString())
        this.method(`clearSlots`, slot.toString())
        if (displayId) {
            window.WH.debug(`Attaching to model viewer slot:`, slot.toString(), `Display ID:`, displayId, `Enchant Visual:`, enchant)
            this.method(`setItems`, [[{
                slot: slot,
                display: displayId,
                visual: enchant || 0
            }]])
        }
    }

    setNewAppearance(options) {
        if(!this.currentCharacterOptions) {
            throw Error(`Character options are not set`)
        }
        const characterOptions = getCharacterOptions(options, this.currentCharacterOptions)
        const race = this.characterRace
        const gender = this.characterGender
        this.method(`setAppearance`, {race: race, gender: gender, options: characterOptions})
    }


    forceTime = 700

    loading = 0
    timeout = null
    onCompleted = null

    onBeforeLoadSource() {
        this.loading++

        if (this.timeout) {
            clearTimeout(this.timeout)
            this.timeout = null
        }
    }

    onLoadedSource() {
        this.loading--

        if (this.timeout) {
            clearTimeout(this.timeout)
            this.timeout = null
        }

        if (this.loading === 0) {
            this.timeout = setTimeout(() => {
                if (this.loading === 0) {
                    if (this.onCompleted) {
                        this.onCompleted()
                    }
                }

                this.timeout = null
            }, 1000)
        }
    }

    toCenter(eyeOnTop, eyeLow) {
        let canvas = model.renderer.canvas[0]
        let gl = model.renderer.context
        let pixels = new Uint8Array(canvas.width * canvas.height * 4)

        gl.readPixels(
            0,                   // x
            0,                   // y
            canvas.width,        // width
            canvas.height,       // height
            gl.RGBA,             // format
            gl.UNSIGNED_BYTE,    // type
            pixels               // destination buffer
        )

		let top = 255
		let left = 255
		let right = 256
		let bottom = 256

        for (let x = 511; x > 256; x -= 2) {
			let breaking = false

			for (let y = 0; y < 512; y += 2) {
				let a = pixels[(y * 512 + x) * 4 + 3]
				if (a > 0.1) {
					right = x + 1
					breaking = true
					break
				}
			}

			if (breaking) {
				break
			}
		}

		for (let x = 0; x < 256; x += 2) {
			let breaking = false

			for (let y = 0; y < 512; y += 2) {
				let a = pixels[(y * 512 + x) * 4 + 3]
				if (a > 0.1) {
					left = x
					breaking = true
					break
				}
			}

			if (breaking) {
				break
			}
		}

		for (let x = 511; x > 256; x -= 2) {
			let breaking = false

			for (let y = 0; y < 512; y += 2) {
				let a = pixels[(y * 512 + x) * 4 + 3]
				if (a > 0.1) {
					right = x + 1
					breaking = true
					break
				}
			}

			if (breaking) {
				break
			}
		}

		for (let y = 0; y < 256; y += 2) {
			let breaking = false

			for (let x = 0; x < 512; x += 2) {
				let a = pixels[(y * 512 + x) * 4 + 3]
				if (a > 0.1) {
					bottom = 511 - y
					breaking = true
					break
				}
			}

			if (breaking) {
				break
			}
		}

		for (let y = 511; y > 256; y -= 2) {
			let breaking = false

			for (let x = 0; x < 512; x += 2) {
				let a = pixels[(y * 512 + x) * 4 + 3]
				if (a > 0.1) {
					top = 511 - y
					breaking = true
					break
				}
			}

			if (breaking) {
				break
			}
		}

        let width = right - left
        let height = bottom - top
        
		// 现在希望显示头部的 1:1 的区域, 但是至少显示整个身高的一半.
        if (eyeOnTop) {
            let ratio = width / height

            // 比较窄, 显示上面的部分.
            if (ratio < 1) {
                // let horizontalAs = []
                // let totalA = 0

                // for (let y = 0; y < 512; y += 2) {
                //     horizontalAs[y / 2] = 0

                //     for (let x = 0; x < 512; x += 2) {
                //         let a = pixels[(y * 512 + x) * 4 + 3]
                //         horizontalAs[y / 2] += a
                //     }
                // }

                // horizontalAs.reverse()
                // totalA = horizontalAs.reduce((a, b) => a + b, 0)
                // let centerIndex = 0
                // let sum = 0

                // for (let y = 0; y < horizontalAs.length; y++) {
                //     sum += horizontalAs[y]
                //     if (sum >= totalA / 2) {
                //         centerIndex = y + 1
                //         break
                //     }
                // }
        
                let newHeight = Math.max(width, height / (eyeLow ? 1.5 : 2))//, centerIndex * 2 - top)
                bottom += newHeight - height
                height = newHeight
            }
        }

        let scaling = Math.min((512 - 8) / width, (512 - 8) / height) * 0.95

        // 需要调整此位移以和中心点对齐.
        let translationX = 256 - (right + left) / 2
        let translationY = 256 - (bottom + top) / 2

        model.renderer.projMatrix[0] *= scaling
        model.renderer.projMatrix[5] *= scaling

        // 0~512 投影到 -1~1
        model.renderer.projMatrix[12] += translationX / 256 * scaling * model.renderer.distance
        model.renderer.projMatrix[13] -= translationY / 256 * scaling * model.renderer.distance

        return new Promise((resolve) => {
            setTimeout(resolve, 100)
        })
    }

    outputBuffer() {
        let canvas = model.renderer.canvas[0]

        return new Promise(resolve => {
            canvas.toBlob(async (blob) => {
                let arrayBuffer = await blob.arrayBuffer()
                let buffer = Buffer.from(arrayBuffer)
                
                model.destroy()
                resolve(buffer)
            }, 'image/webp', 0.8)
        })
    }
}

// Instance variables
WowModelViewer.prototype._currentCharacterOptions = 0
WowModelViewer.prototype._characterGender = null
WowModelViewer.prototype._characterRace = null

// Getter and Setter for currentCharacterOptions
Object.defineProperty(WowModelViewer.prototype, `currentCharacterOptions`, {
    get: function() {
        return this._currentCharacterOptions
    },
    set: function(value) {
        this._currentCharacterOptions = value
    }
})

// Getter and Setter for characterGender
Object.defineProperty(WowModelViewer.prototype, `characterGender`, {
    get: function() {
        return this._characterGender
    },
    set: function(value) {
        this._characterGender = value
    }
})

// Getter and Setter for characterRace
Object.defineProperty(WowModelViewer.prototype, `characterRace`, {
    get: function() {
        return this._characterRace
    },
    set: function(value) {
        this._characterRace = value
    }
})


export {
    WowModelViewer,
}
