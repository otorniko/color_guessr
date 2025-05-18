type Range<N extends number, Result extends number[] = []> =
  Result['length'] extends N
  ? Result[number]
  : Range<N, [...Result, Result['length']]>;

type UInt8_T = Range<256>;

export interface RGBDecimals {
    Red: UInt8_T
    Green: UInt8_T
    Blue: UInt8_T
};

export interface Color {
    name: string
    hex: number
    decimal: RGBDecimals
}