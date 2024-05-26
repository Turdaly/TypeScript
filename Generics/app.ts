type NameFigure = 'rect' | 'triangle' | 'others' | 'circle'

interface Figure<T> {
  name: NameFigure,
  data?: T
}
interface AmountOfFigures {
  squares: number;
  circles: number;
  triangles: number;
  others: number;
}
function calculateAmountOfFigures(figure: Figure<object>[]) {
  const arr = figure.reduce((acc, cur) => {
    acc[cur.name] = (acc[cur.name] || 0) + 1
    return acc
  }, {})
  return arr
}

const data:Figure<object>[]= [
  {
    name: "rect",
    data: { a: 5, b: 10 },
  },
  {
    name: "rect",
    data: { a: 6, b: 11 },
  },
  {
    name: "triangle",
    data: { a: 5, b: 10, c: 14 },
  },
  {
    name: "others",
    data: { l: 15 },
  },
  {
    name: "circle",
    data: { r: 10 },
  },
  {
    name: "circle",
    data: { r: 5 },
  },
  {
    name: "rect",
    data: { a: 15, b: 7 },
  },
  {
    name: "triangle",
  },
]

console.log(calculateAmountOfFigures(data));