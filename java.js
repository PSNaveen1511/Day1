// COVID-19 Ticket Booking Code//
const row = 5;
const colm = 5;
myarray = []
v = 0;
names = ['cherath', 'esakki', 'gayathiri', 'suriya', 'babu bro', 'AJ bro', 'AAA','BBBB']
for (i = 0; i < row; i++) {
    myarray[i] = [];
    for (j = 0; j < colm; j++) {
        if (j % 2 == 0 < i % 2 == 0) {
            myarray[i][j] = "covid:-(19)";
        }  else if (names[v]==null) {
            myarray[i][j] = 1;
        }else {
            myarray[i][j] = names[v++];

        }
    }

}; console.log(myarray)
