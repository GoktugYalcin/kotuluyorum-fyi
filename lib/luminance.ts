class Luminance {
  constructor() {}

  whiteLuminance = this.calculate(255, 255, 255)
  blackLuminance = this.calculate(0, 0, 0)

  hexToRgb(hex: string): number[] {
    hex = hex.replace('#', '')

    if (hex.length === 3) {
      hex = hex
        .split('')
        .map((char) => char + char)
        .join('')
    }

    const bigint = parseInt(hex, 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255

    return [r, g, b]
  }

  calculate(r: number, g: number, b: number) {
    const a = [r, g, b].map((v) => {
      v /= 255
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
    })
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
  }

  decide(colorHex: string) {
    const colorRgb = this.hexToRgb(colorHex)
    const bgLuminance = this.calculate(colorRgb[0], colorRgb[1], colorRgb[2])

    const contrastWithWhite =
      (this.whiteLuminance + 0.05) / (bgLuminance + 0.05)
    const contrastWithBlack =
      (bgLuminance + 0.05) / (this.blackLuminance + 0.05)

    return contrastWithWhite > contrastWithBlack ? '#FFFFFF' : '#000000'
  }
}

const luminanceClient = new Luminance()

export default luminanceClient
