using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sorting_exercises
{
    public static class SharedUtility
    {
        public static int[] CreateRandomArray(int size)
        {
            var array = new int[size];
            var rand = new Random();

            for (int i = 0; i < size; i++)
            {
                array[i] = rand.Next(-100, 100);
            }

            return array;
        }
    }
}
