var twoSum = function(nums, target) {
    const previousValues = {};
    for(let i=0;i<nums.length;i++){
        const currentValue = nums[i];
        const neededValue = target - currentValue;
        const index2 = previousValues[neededValue];
        if(index2!=null){
            return [index2, i];
        }else{
            previousValues[currentValue] = i;
        }
    }
}