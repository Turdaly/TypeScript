interface Currencies {
  usa: "usd";
  kz: "tenge";
  readonly rus: 'rub'
}

type CreateCustomCurr <T> = {
  -readonly[K in keyof T]-?: string
}

type CustomCurenies = CreateCustomCurr<Currencies>


