function shellSortDates(dates) {
    const n = dates.length;
    
    // Define the gap sequence (using Knuth's formula for better performance)
    let h = 1;
    while (h < n / 3) {
      h = 3 * h + 1;
    }
  
    // Start with the largest gap and work down to a gap of 1
    while (h >= 1) {
      // Use insertion sort for elements gapped by h
      for (let i = h; i < n; i++) {
        // Insert arr[i] into the sorted sequence arr[0...i-h]
        for (let j = i; j >= h && helper(dates[j - h], dates[j]) > 0; j -= h) {
          swap(dates, j, j - h);
        }
      }
  
      // Reduce the gap
      h = Math.floor(h / 3);
    }
  
    return dates;
  }
  
  // Helper function to compare two dates
  function helper(date1, date2) {
    const timestamp1 = new Date(date1).getTime();
    const timestamp2 = new Date(date2).getTime();
  
    return timestamp1 - timestamp2;
  }
  
  // Helper function to swap elements in an array
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  
  const unsortedDates = [
    "2023-07-03 12:30:15", "2023-07-03 10:15:00", "2023-07-02 18:45:30", "2023-07-01 20:00:00",
  ];
  
  const sortedDates = shellSortDates(unsortedDates);
  
  console.log(sortedDates);
  