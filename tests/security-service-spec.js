'use strict';

describe('securityService', function () {
  beforeEach(module('ngSecurity'));
  var $cookies,
      $security;

  beforeEach(inject(function ($injector) {
    $cookies = $injector.get('$cookies');
    $security = $injector.get('$security');
  }));

  it('should authenticate without user object', function () {
    $security.login('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9');

    assert.equal($cookies.get('ng-security-authorization'), 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9');
  });

  it('should authenticate with user object', function () {
    $security.login('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9', {
      name: 'Patrick Porto'
    });

    assert.equal($cookies.getObject('ng-security-user').name, 'Patrick Porto');
  });
});