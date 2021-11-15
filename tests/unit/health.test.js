const HealthController = require('../../src/controllers/health');

describe('HealthController.checkHealth', () => {
  it('should have a health check function', () => {
    expect(typeof HealthController.health).toBe('function');
  });
});
