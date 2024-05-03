using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Sorting_exercises.Interfaces;

namespace Sorting_exercises.Sorting_algos
{
    public class BubbleSort : ISorter
    {
        private int[] numbers;

        /// <summary>
        /// My implementation of Bubblesort
        /// Worst and Average Case Time Complexity: O(n^2)
        /// Best Case Time Complexity: O(N)
        /// </summary>
        public BubbleSort(int[] numbersToBeSorted)
        {
            numbers = numbersToBeSorted;
        }

        public void Sort()
        {
            var watch = System.Diagnostics.Stopwatch.StartNew();
            watch.Start();
            BubbleSorting();
            watch.Stop();
            Console.WriteLine("Bubble sort");
            numbers.WriteArrayToConsole();
            Console.WriteLine($"Sorting time: {watch.Elapsed.TotalMilliseconds} ms.\n");
        }

        private void BubbleSorting()
        {
            for (int i = 0; i < numbers.Length; i++)
            {
                for (int j = 0; j < numbers.Length - 1; j++)
                {
                    if (numbers[j] > numbers[j + 1])
                    {
                        numbers.Swap(j, j + 1);
                    }
                }
            }
        }
    }
}
