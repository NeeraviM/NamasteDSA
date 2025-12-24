function secondLargest(nums){
 let firstLargestNum = -Infinity;
 let secondLargestNum = -Infinity;
 
 for(let i=0;i<nums.length-1;i++){
	if(nums[i]>firstLargestNum){
	   firstLargestNum = nums[i];
	}
	if(nums[i]>secondLargest){
	   secondLargestNum = nums[i+1];
	}
	if(firstLargestNum < secondLargestNum){
		let temp = firstLargestNum;
		firstLargestNum = secondLargestNum;
		secondLargestNum = temp;
	}
 }
 return secondLargestNum;
 
}