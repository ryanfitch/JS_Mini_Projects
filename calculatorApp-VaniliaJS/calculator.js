console.log("Welcome to my calculator!");

var calculator = {
		sum: 0,
		add: function(value) {
                                this.sum += value;
                            },
                            clear: function() {
                                this.sum = 0;
                            },
                            equals: function() {
                                return this.sum;
                            },
                            subtract: function(value) {
                                this.sum -= value;
                            },
                            multiply: function(value) {
                                this.sum *= value;
                            },
                            divide: function(value) {
                                this.sum = this.sum/value;
                            }
};
