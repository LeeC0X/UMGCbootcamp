using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Sorting_exercises.Interfaces;

namespace Sorting_exercises.Sorting_algos
{
    public class SelectionSort : ISorter
    {
        private int[] numbers;

        /// <summary>
        /// My implementation of the selectionsort algorithm
        /// Time complexity: O(n^2)
        /// because it has 2 nested loops
        /// </summary>
        public SelectionSort(int[] numbersToBeSorted)
        {
            numbers = numbersToBeSorted;
        }

        public void Sort()
        {
            var watch = System.Diagnostics.Stopwatch.StartNew();
            Sorting(numbers);
            watch.Stop();
            Console.WriteLine("Selection sort");
            numbers.WriteArrayToConsole();
            Console.WriteLine($"Sorting time: {watch.Elapsed.TotalMilliseconds} ms.\n");
        }

        private void Sorting(int[] numbers)
        {
            for (int i = 0; i < numbers.Length - 1; i++)
            {
                int min_index = i;
                for (int j = min_index; j <= numbers.Length - 1; j++)
                {
                    if (numbers[j] < numbers[min_index])
                    {
                        min_index = j;
                    }
                }
                numbers.Swap(i, min_index);
            }
        }
    }
}
