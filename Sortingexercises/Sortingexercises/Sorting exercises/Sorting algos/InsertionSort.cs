using Sorting_exercises.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sorting_exercises.Sorting_algos
{
    public class InsertionSort : ISorter
    {
        private readonly int[] numbers;

        /// <summary>
        /// My implementation of the easy Insertion sort
        /// Time Complexity: O(n^2) 
        /// </summary>
        /// <param name="numbersToBeSorted"></param>
        public InsertionSort(int[] numbersToBeSorted)
        {
            numbers = numbersToBeSorted;
        }

        public void Sort()
        {
            var watch = System.Diagnostics.Stopwatch.StartNew();
            watch.Start();
            InsertionSorting();
            watch.Stop();
            Console.WriteLine("Insertion Sort");
            numbers.WriteArrayToConsole();
            Console.WriteLine($"Sorting time: {watch.Elapsed.TotalMilliseconds} ms.\n");
        }

        private void InsertionSorting()
        {
            for (int i = 0; i < numbers.Length; i++)
            {
                int j = i;
                while (j > 0 && (numbers[j - 1] > numbers[j]))
                {
                    numbers.Swap(j - 1, j);
                    j--;
                }
            }
        }
    }
}
