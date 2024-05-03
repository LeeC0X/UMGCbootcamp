using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sorting_exercises
{
    public static class UtilityExtensions
    {
        /// <summary>
        /// Writes the whole array to the console in [ ] brackets.
        /// </summary>
        /// <param name="arr"></param>
        public static void WriteArrayToConsole(this int[] arr)
        {
            Console.Write($"[ ");
            foreach (var item in arr)
            {
                Console.Write($"{item}, ");
            }
            Console.Write($"]\n");
        }

        /// <summary>
        /// Swaps the value in X and Y positions.
        /// </summary>
        /// <param name="arr"></param>
        /// <param name="x"></param>
        /// <param name="y"></param>
        public static void Swap(this int[] arr, int x, int y)
        {
            int temp = arr[x];
            arr[x] = arr[y];
            arr[y] = temp;
        }
    }
}
