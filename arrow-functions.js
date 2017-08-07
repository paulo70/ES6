const allDevices = [{
  device: 'airConditioning',
  potency: 1500,
  hoursForDay: 8,
  mouth: 30
}, {
  device: 'eletricShower',
  potency: 3300,
  hoursForDay: 1,
  mouth: 30
}, {
  device: 'freezer',
  potency: 200,
  hoursForDay: 10,
  mouth: 30
}, {
  device: 'refrigerator',
  potency: 350,
  hoursForDay: 10,
  mouth: 30
}, {
  device: 'lamp',
  potency: 100,
  hoursForDay: 6,
  mouth: 30
}]

const results = allDevices
  .map(devices => devices.potency * devices.hoursForDay * devices.mouth)
  .reduce((acc, item) => acc + item * 0.40)

console.log(results);