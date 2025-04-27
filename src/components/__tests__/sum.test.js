
import { sum } from "../sum";
test("Sum function should show the sum of two numers", ()=>{
    const result = sum(3, 4);

    //assetion 
    expect(result).toBe(7)
});