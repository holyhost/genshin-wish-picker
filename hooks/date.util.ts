export const getFormatDateTime = function(d: Date, format = '-') {
    const yyyy = d.getFullYear()
    const mm = (d.getMonth()+1).toString().padStart(2,'0')
    const dd = (d.getDate()).toString().padStart(2, '0')
    const hh = d.getHours().toString().padStart(2, '0')
    const MM = d.getMinutes().toString().padStart(2, '0')
    const ss = d.getSeconds().toString().padStart(2, '0')
    return yyyy + format + mm + format + dd + ' ' + hh+':'+MM+":"+ss
}