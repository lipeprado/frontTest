// Dynamic imports aren't supported on ES6 thus using require
<<<<<<< HEAD
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
=======
import devStore from "./configureStore.dev";
import prodStore from "./configureStore.prod";

export default (process.env.NODE_ENV === "production" ? devStore : prodStore);
>>>>>>> e1c065d9974aa84fdd30ebac67ad674f3306ad28
