let pre = 20.00
let cur = 10.00

console.log(((pre, cur)=>{
    let d = pre - cur;
    if (d <= 0) return;
    let disCount = Number((d / pre).toFixed(2));

    if (disCount > 0.05) return `${disCount * 100}%OFF`;

    return `-R$${disCount > 1 ? disCount.toFixed(2) : disCount.toFixed(1)}`;
})(pre, cur))