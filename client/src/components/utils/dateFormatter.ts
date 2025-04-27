export const dateFormatter = (date: Date | string) => {
    const realDate = typeof date === "string" ? new Date(date) : date;
  
    return realDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
}