// Function to find the second largest number in an array. 
// This will work for both positive and negative numbers.
// It will not work if the array has duplicate largest numbers.

function secondLargest(nums){
// If the array has less than 2 elements
if(nums.length < 2){
 return "Array Should have minimum 2 elements";
}
 let firstLargestNum = -Infinity;
 let secondLargestNum = -Infinity;
 
 for(let i=0;i<nums.length;i++){
	if(nums[i] > firstLargestNum){
		secondLargestNum = firstLargestNum;
		firstLargestNum = nums[i];
	}
	else if(nums[i] > secondLargestNum){
		secondLargestNum = nums[i];
	}
 }
 return secondLargestNum;
}