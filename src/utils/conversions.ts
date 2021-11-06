//     ((X - Xi) * (Yf - Yi))
// Y = ---------------------- + Yi
//           (Xf - Xi)
function scale(
  inputValue: number,
  start1: number,
  end1: number,
  start2: number,
  end2: number
) {
  return start2 + ((inputValue - start1) * (end2 - start2)) / (end1 - start1);
}

function msToMinute(milissecondValue: number) {
  const minuteValue = scale(milissecondValue, 0, 60000, 0, 1)

  return minuteValue
}

function scaleValue(value: number | string, scale: number) {
  let scaledValue = 0

  if (value !== "###" && value !== undefined)
    if (typeof value === "string")
      scaledValue = Number(value) * scale
    else
      scaledValue = value * scale
  return scaledValue
}
function unscaleValue(value: number | string, scale: number) {
  let scaledValue = 0

  if (value !== "###" && value !== undefined)
    if (typeof value === "string")
      scaledValue = Number(value) / scale
    else
      scaledValue = value / scale
  return scaledValue
}

export { msToMinute, scale, scaleValue, unscaleValue };
