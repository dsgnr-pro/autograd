const CREDIT_TERMS = [`61 дн`, `6 мес`, `12 мес`, `24 мес`, `36 мес`, `48 мес`, `60 мес`, `72 мес`, `84 мес`];
const PAYMENT_PERCENT = [`0%`, `10%`, `20%`, `30%`, `40%`, `50%`, `60%`, `70%`, `80%`];

const startFromPeriod = CREDIT_TERMS.indexOf(`72 мес`);
const startFromPayment = PAYMENT_PERCENT.indexOf(10);

$(`.js-range-slider--period`).ionRangeSlider({
  grid: true,
  values: CREDIT_TERMS,
  from: startFromPeriod
});

$(`.js-range-slider--payment`).ionRangeSlider({
  grid: true,
  values: PAYMENT_PERCENT,
  from: startFromPayment
});
