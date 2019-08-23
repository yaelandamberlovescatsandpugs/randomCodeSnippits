var func = (arg) => {
  let tempArr = arg
  let temp;

  let switch = (args) => {
    switch (args)
      case "something":
        do something;
        break;
      default "something else":
        do something;
        break;
  }

  tempArr.forEach(function(e) {
    temp = switch(e);
  })

  return temp;
}