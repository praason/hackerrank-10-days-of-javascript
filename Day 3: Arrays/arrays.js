function getSecondLargest(nums) {
    // Complete the function
    let first;
    let second = 0;
    if(nums[0] > nums[1]){
        first = nums[0];
        second = nums[1];
    }
    else if(nums[0] == nums[1])
        first = nums[0];
    else{
        first = nums[1]
        second = nums[0];
    }
    
    for(let i = 1; i < nums.length;i++){
        if(nums[i] > first){
            second = first;
            first = nums[i];
        }
        else if(nums[0] == first)
            continue;
        else if(nums[i] > second && nums[i] != first)
            second = nums[i];
        else
            continue;
    }
    return second;
}
