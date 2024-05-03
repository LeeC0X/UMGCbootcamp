using Sorting_exercises;
using Sorting_exercises.Sorting_algos;

int[] sortThis = { 50, 48, 22, 1154, 1, 0, 8859, -51, 555444488, 999, 123456, 852456, 2, 3, -100, 963 };

Console.WriteLine("I will be sorting this array: ");
sortThis.WriteArrayToConsole();
Console.WriteLine();

var quickSort = new QuickSort((int[])sortThis.Clone());
var selectionSort = new SelectionSort((int[])sortThis.Clone());
var bubbleSort = new BubbleSort((int[])sortThis.Clone());
var insertionSort = new InsertionSort((int[])sortThis.Clone());
var mergeSort = new MergeSort((int[])sortThis.Clone());

quickSort.Sort();
selectionSort.Sort();
bubbleSort.Sort();
insertionSort.Sort();
mergeSort.Sort();