// STACK (primitive)

// stores data of primitive datatypes, variables and memory reference

// When a function returns a variable that was allocated on the stack, it typically returns a copy of the variable's value, not a reference or pointer to the original memory location on the stack. eg - below

let profName = "Yatharth Pandey"
let penName = profName
penName = "Uttam Pandey"

comp = [
    {name_category:"Real Name", before:"Yatharth Pandey", after: profName},
    {name_category:"Pen Name", before:"Yatharth Pandey", after: penName},
]

console.table(comp)   //after also real name is Yatharth Pandey cause the penName was given copy of profName data not memory reference


// HEAP (non - primitive)

// stores data which is accesed via variables in stack with memory reference

// when a function returns variable that was allocated on heap, it typically returns the memory reference of the variable's data value hence not a copied data. eg - below

let bankCredentials = {
    user_id: "abc445",
    password: "mahan@ADMI45"
}

bankCredentials2 = bankCredentials

bankCredentials2.password = "bekar@ADMI69"



comp2 = [
    {category:"bank credentials 1", before:{user_id: "abc445",password: "mahan@ADMI45"}, after: bankCredentials},
    {category:"bank credentials 2", before:{user_id: "abc445",password: "mahan@ADMI45"}, after: bankCredentials2}
]

console.table(comp2)   //password changed in both cause bankcredentials1 and 2 both we just referencing same data value so if changed through one also changed for other