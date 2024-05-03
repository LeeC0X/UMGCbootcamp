using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Sorting_exercises.Interfaces;

namespace Sorting_exercises.Sorting_algos
{
    public class QuickSort : ISorter
    {
        private readonly int[] numbers;


        /// <summary>
        /// My implementation of the quicksort algorithm
        /// Best case scenario: O(n log(n))
        /// Average scenario: O(n log(n))
        /// Worst case scenario: O(n^2)
        /// </summary>
        /// <param name="numbersToBeSorted"></param>
        public QuickSort(int[] numbersToBeSorted)
        {
            numbers = numbersToBeSorted;
        }

        public void Sort()
        {
            var watch = System.Diagnostics.Stopwatch.StartNew();
            watch.Start();
            QuickSorting(numbers, 0, numbers.Length - 1);
            watch.Stop();
            Console.WriteLine("Quick Sort");
            numbers.WriteArrayToConsole();
            Console.WriteLine($"Sorting time: {watch.Elapsed.TotalMilliseconds} ms.\n");
        }

        private int Partition(int[] numbers, int low, int high)
        {
            int pivot = numbers[high];

            int i = (low - 1);

            for (int j = low; j <= high - 1; j++)
            {
                if (numbers[j] < pivot)
                {
                    i++;
                    numbers.Swap(i, j);
                }
            }
            numbers.Swap(i + 1, high);
            return (i + 1);
        }

        private void QuickSorting(int[] numbers, int low, int high)
        {
            if (low < high)
            {
                int pi = Partition(numbers, low, high);

                QuickSorting(numbers, low, pi - 1);
                QuickSorting(numbers, pi + 1, high);
            }
        }
    }
}
