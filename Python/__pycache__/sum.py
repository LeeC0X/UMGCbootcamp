def sum_nums(nums):
    """Given list of numbers, return sum of those numbers.

    For example:
      sum_nums([1, 2, 3, 4])

    Should return (not print):
      10
    """  


    total = 0 
    for element in range(0,len(nums)):
       total = total + nums[element]
    return total



print("sum_nums returned", sum_nums([1, 2, 3, 4]))