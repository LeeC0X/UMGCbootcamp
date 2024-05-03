using Sorting_exercises.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sorting_exercises.Sorting_algos
{
    public class MergeSort : ISorter
    {
        private readonly int[] numbers;

        /// <summary>
        /// My implementation of Merge sort
        /// Time Complexity is always: O(n log(n))
        /// </summary>
        /// <param name="numbersToBeSorted"></param>
        public MergeSort(int[] numbersToBeSorted)
        {
            numbers = numbersToBeSorted;
        }

        public void Sort()
        {
            var watch = System.Diagnostics.Stopwatch.StartNew();
            watch.Start();
            MergeSorting(numbers, 0, numbers.Length - 1);
            watch.Stop();
            Console.WriteLine("Merge Sort");
            numbers.WriteArrayToConsole();
            Console.WriteLine($"Sorting time: {watch.Elapsed.TotalMilliseconds} ms.\n");
        }

        private void MergeSorting(int[] arr, int left, int right)
        {
            if (left < right)
            {
                int middle = left + (right - left) / 2;

                MergeSorting(arr, left, middle);
                MergeSorting(arr, middle + 1, right);

                Merge(arr, left, middle, right);
            }
        }

        private void Merge(int[] arr, int left, int middle, int right)
        {
            int len1 = middle - left + 1;
            int len2 = right - middle;

            var leftArr = new int[len1];
            var rightArr = new int[len2];

            int i, j;

            for (i = 0; i < len1; i++)
            {
                leftArr[i] = arr[left + i];
            }
            for (j = 0; j < len2; j++)
            {
                rightArr[j] = arr[middle + 1 + j];
            }

            i = 0;
            j = 0;
            int k = left;
            while (i < len1 && j < len2)
            {
                if (leftArr[i] < rightArr[j])
                {
                    arr[k]= leftArr[i];
                    i++;
                }
                else
                {
                    arr[k]= rightArr[j];
                    j++;
                }
                k++;
            }

            while (i < len1)
            {
                arr[k] = leftArr[i];
                i++;
                k++;
            }

            while (i < len2)
            {
                arr[k] = rightArr[j];
                j++;
                k++;
            }
        }
    }
}
