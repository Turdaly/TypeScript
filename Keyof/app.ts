interface ICompany {
  name: string,
  debts: number
}

const printData = <T, K extends keyof T, S extends keyof T>(company: T, name: K, debts: S) => {
  console.log(`Company ${company[name]}, debts: ${company[debts]}`)
}
const company: ICompany = {
  name: 'hh',
  debts: 5000
}


printData(company, 'name', 'debts')