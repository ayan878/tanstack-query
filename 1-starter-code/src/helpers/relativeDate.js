/**
|--------------------------------------------------
|The line of code `const delta = Math.round((+new Date() - new Date(date)) / 1000);` calculates the difference in seconds between the current date and a given date. Here's a detailed breakdown of how it works:

### Detailed Explanation:

1. **`new Date()`**:
   - This creates a new `Date` object representing the current date and time.

2. **`new Date(date)`**:
   - This creates a new `Date` object from the given `date` string or object. The `date` variable is expected to be a valid date string (e.g., `"2023-07-21T00:00:00Z"`) or a date object.

3. **`+new Date()`**:
   - The unary plus operator (`+`) converts the `Date` object to its timestamp representation in milliseconds since January 1, 1970 (the Unix epoch). Essentially, it converts the `Date` object to a number representing the number of milliseconds.

4. **`+new Date() - new Date(date)`**:
   - This calculates the difference in milliseconds between the current date and the given date by subtracting the timestamp of the given date from the timestamp of the current date.

5. **`/ 1000`**:
   - Dividing the difference in milliseconds by 1000 converts the value from milliseconds to seconds.

6. **`Math.round(...)`**:
   - The `Math.round` function rounds the resulting value to the nearest whole number. This is useful to avoid having fractional seconds and to work with whole seconds instead.

### Example:

Let's go through an example step by step. Suppose the current date and time is `2024-07-21T12:00:00Z` and the given date is `2024-07-20T12:00:00Z`.

1. **Current Date**: `new Date()` produces `2024-07-21T12:00:00Z`.
2. **Given Date**: `new Date(date)` with `date` being `2024-07-20T12:00:00Z` produces `2024-07-20T12:00:00Z`.
3. **Timestamps**:
   - `+new Date()` converts `2024-07-21T12:00:00Z` to its timestamp in milliseconds, e.g., `1724380800000`.
   - `new Date(date)` converts `2024-07-20T12:00:00Z` to its timestamp in milliseconds, e.g., `1724294400000`.

4. **Difference**:
   - `1724380800000 - 1724294400000` equals `86400000` milliseconds.

5. **Convert to Seconds**:
   - `86400000 / 1000` equals `86400` seconds.

6. **Rounding**:
   - `Math.round(86400)` results in `86400`.

So, `delta` will be `86400` seconds, indicating that the difference between the current date and the given date is 86400 seconds (or 24 hours).

### Summary:

The code `const delta = Math.round((+new Date() - new Date(date)) / 1000);` calculates the number of seconds between the current time and a specified date by:
- Converting both dates to timestamps.
- Finding the difference in milliseconds.
- Converting the difference to seconds.
- Rounding to the nearest whole number.
|--------------------------------------------------
*/
export function relativeDate(date) {
  const delta = Math.round((+new Date() - new Date(date)) / 1000);

  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;

  if (delta < 30) {
    return "just now";
  } else if (delta < minute) {
    return delta + " seconds ago";
  } else if (delta < 2 * minute) {
    return "a minute ago";
  } else if (delta < hour) {
    return Math.floor(delta / minute) + " minutes ago";
  } else if (Math.floor(delta / hour) == 1) {
    return "1 hour ago";
  } else if (delta < day) {
    return Math.floor(delta / hour) + " hours ago";
  } else if (delta < day * 2) {
    return "yesterday";
  } else {
    return delta + " days ago";
  }
}
