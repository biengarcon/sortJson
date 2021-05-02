const members = {"data": [{"user": "mike@mail.com", "rating": 20, "disabled": false},
    {"user": "greg@mail.com", "rating": 14, "disabled": false},
    {"user": "john@mail.com", "rating": 25, "disabled": true}],
    "condition": {"exclude": [{"disabled": true}], "sort_by": ["rating"]}};

const sortMembers = (payload) => {
    // debugger;
    const {condition:{exclude,include,sort_by},data} = payload;
    console.log(exclude,sort_by);
    const result = data.filter((item) => {
        
        for (let i = 0; i < (exclude || include).length; i++) {
            const value = exclude[i];   // {"disabled": true}
            const criteria = Object.keys(value)[0]; //"disabled"
            const criteriaValue = value[criteria]; // true 
            if (exclude) {
            if (item[criteria] === criteriaValue) {
                return false;
            }
            return true;
        }
        if(include){    
        if (item[criteria] === criteriaValue) {
                return true;
            }
            return false;
                };
            };
        }).sort((a, b) => {
        const criteria = sort_by[0];
        return a[criteria] > b[criteria] ? 1 : -1;
    });
    console.log(result);
}
sortMembers(members);
