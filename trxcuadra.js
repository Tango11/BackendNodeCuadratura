first(105,106);

async function asyncSqrto(plot,plotdos, callback) {
  console.log('First START execution with value =',plot,plotdos);
  setTimeout(function () {
      callback(plot,plotdos, 2025);
  }, 0 | Math.random() * 100);
}

async function asyncSqrti(value, callback) {
  console.log('Second START execution with value =', value);
  setTimeout(function () {
      callback(value, 2040);
  }, 0 | Math.random() * 100);
}

async function first(plot,plotdos)
{
asyncSqrto(plot,plotdos, function (plot,plotdos, result) {
  console.log('END execution with value =', plot,plotdos, 'and result =', result);
  asyncSqrti(plot, function (value, result) {
      console.log('END execution with value =', value, 'and result =', result);
      
  });
}); 
} 
