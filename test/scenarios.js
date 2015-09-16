describe('Flash Messages', function() {

  beforeEach(module('flash'));

  beforeEach(function() { browser().navigateTo('/index.html'); });

  it('renders an empty ordered list on its initial state', function() {
    expect(element('div#flash-messages').count()).toBe(1);
    expect(element('div#flash-messages > div').count()).toBe(0);
  });

  describe('when on the same view', function(){
    beforeEach(function() { element('#goEdit').click(); });

    it('renders a message with the default "success" level', function() {
      element('#saveSuccess').click();
      var messages = element('div#flash-messages > div');
      expect(messages.count()).toBe(1);
      expect(messages.prop('className')).toEqual('alert alert-success');
      expect(messages.text()).toEqual('Saved successfully!');
    });

    it('renders a message with the level and text provided', function() {
      element('#saveFailure').click();
      var messages = element('div#flash-messages > div');
      expect(messages.count()).toBe(1);
      expect(messages.prop('className')).toEqual('alert alert-danger');
      expect(messages.text()).toEqual('Something went wrong!');
    });

    it('renders multiple messages with the default "success" level and text', function() {
      element('#saveMultipleSuccess').click();
      var yay = element('div#flash-messages > div:first');
      expect(yay.prop('className')).toEqual('alert alert-success');
      expect(yay.text()).toEqual('Yay!');
      var saved = element('div#flash-messages > div:nth-of-type(2)');
      expect(saved.prop('className')).toEqual('alert alert-success');
      expect(saved.text()).toEqual('Saved successfully!');
    });

    it('renders multiple messages with the level and text provided', function() {
      element('#saveMultipleTypes').click();
      var yay = element('div#flash-messages > div:first');
      expect(yay.prop('className')).toEqual('alert alert-success');
      expect(yay.text()).toEqual('Yay!');
      var somethingWrong = element('div#flash-messages > div:nth-of-type(2)');
      expect(somethingWrong.prop('className')).toEqual('alert alert-danger');
      expect(somethingWrong.text()).toEqual('Something went wrong!');
    });
  });

  describe('when navigating to another view', function() {

    it('renders a message with the default "success" level', function() {
      element('#goEditSuccess').click();
      var messages = element('div#flash-messages > div');
      expect(messages.count()).toBe(1);
      expect(messages.prop('className')).toEqual('alert alert-success');
      expect(messages.text()).toEqual('You have reached the edit page!');
    });

    it('renders a message with the level and text provided', function() {
      element('#goEditFailure').click();
      var messages = element('div#flash-messages > div');
      expect(messages.count()).toBe(1);
      expect(messages.prop('className')).toEqual('alert alert-danger');
      expect(messages.text()).toEqual('Something went wrong!');
    });

    it('renders multiple messages with the default "success" level and text', function() {
      element('#goEditMultipleSuccess').click();
      var yay = element('div#flash-messages > div:first');
      expect(yay.prop('className')).toEqual('alert alert-success');
      expect(yay.text()).toEqual('Yay!');
      var youveReached = element('div#flash-messages > div:nth-of-type(2)');
      expect(youveReached.prop('className')).toEqual('alert alert-success');
      expect(youveReached.text()).toEqual('You have reached the edit page!');
    });

    it('renders multiple messages with the level and text provided', function() {
      element('#goEditMultipleTypes').click();
      var yay = element('div#flash-messages > div:first');
      expect(yay.prop('className')).toEqual('alert alert-success');
      expect(yay.text()).toEqual('Yay!');
      var somethingWrong = element('div#flash-messages > div:nth-of-type(2)');
      expect(somethingWrong.prop('className')).toEqual('alert alert-danger');
      expect(somethingWrong.text()).toEqual('Something went wrong!');
    });
  });
});
