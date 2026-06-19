const DEFAULT_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

export class ConfigurationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ConfigurationError';
  }
}

export async function submitEnquiry(data) {
  const endpoint = process.env.REACT_APP_FORM_ENDPOINT || DEFAULT_ENDPOINT;

  if (!endpoint || endpoint === DEFAULT_ENDPOINT) {
    console.warn(
      'REACT_APP_FORM_ENDPOINT not set. Form data not sent.\n' +
      'Set it in .env: REACT_APP_FORM_ENDPOINT=https://formspree.io/f/your_id'
    );
    throw new ConfigurationError('Form endpoint not configured');
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `HTTP ${response.status}`);
  }

  return response.json();
}
