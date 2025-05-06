export function logAction(action, user = 'unknown') {
    const time = new Date().toISOString();
    console.log(`[${time}] ${action} by ${user}`);
  }
  