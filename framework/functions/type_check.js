export default function type_check(variable, conf) {
  let not_failed = true;
  if(conf.type){
    // >>>>> type_check_v1
    if(Array.isArray(variable)){
      if(conf.type != 'array'){
        not_failed = false;
      }
    }
    else if(variable === null || variable === undefined){
      if(conf.type != 'null') {
        not_failed = false;
      }
    }
    else if(typeof variable !== conf.type){
      not_failed = false;
    } // <<<<< type_check_v1
    if(conf.type === 'object' && conf.properties) {
      if (type_check(conf.properties, {type: 'object'})){
        for (const [key, value] of Object.entries(conf.properties)) {
          not_failed &= type_check(variable[key], value)
        }
      }
    }
  }
  if(not_failed && conf.value){
    if(typeof conf.value === 'object') {
      not_failed &= JSON.stringify(conf.value) === JSON.stringify(variable);
    } else {
      not_failed &= variable===conf.value;
    }
  }
  if(not_failed && conf.enum){
    not_failed &= conf.enum.some(possible_value => {
      if(typeof possible_value === 'object') {
        return JSON.stringify(possible_value) === JSON.stringify(variable);
        }
      else {
        return variable===possible_value;
      }
    })
  }
  return Boolean(not_failed);
}
