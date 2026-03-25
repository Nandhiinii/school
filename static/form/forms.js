		(function ($) {

			"use strict";

			var $document = $(document),
				$window = $(window),
				forms = {
				contactForm: $('#contactForm'),
				questionForm: $('#questionForm'),
				bookingForm: $('#bookingForm'),
				requestForm: $('#requestForm'),
				newsletterForm: $('#newsletterForm')
			};

			$document.ready(function () {
				// contact page form
				if (forms.contactForm.length) {
					var $contactform = forms.contactForm;
					$contactform.validate({
						rules: {
							name: {
								required: true,
								minlength: 2
							},
							message: {
								required: true,
								minlength: 20
							},
							email: {
								required: true,
								email: true
							}

						},
						messages: {
							name: {
								required: "Please enter your name",
								minlength: "Your name must consist of at least 2 characters"
							},
							message: {
								required: "Please enter message",
								minlength: "Your message must consist of at least 20 characters"
							},
							email: {
								required: "Please enter your email"
							}
						},
						submitHandler: function submitHandler(form) {
							$(form).ajaxSubmit({
								type: "POST",
								data: $(form).serialize(),
								url: "form/process-contact.php",
								success: function success() {
									$('.successform', $contactform).fadeIn();
									$contactform.get(0).reset();
								},
								error: function error() {
									$('.errorform', $contactform).fadeIn();
								}
							});
						}
					});
				}
				// question form
				if (forms.questionForm.length) {
					var $questionForm = forms.questionForm;
					$questionForm.validate({
						rules: {
							name: {
								required: true,
								minlength: 2
							},
							messages: {
								required: true,
								minlength: 20
							},
							email: {
								required: true,
								email: true
							}
						},
						messages: {
							name: {
								required: "Please enter your name",
								minlength: "Your name must consist of at least 2 characters"
							},
							message: {
								required: "Please enter message",
								minlength: "Your message must consist of at least 20 characters"
							},
							email: {
								required: "Please enter your email"
							}
						},
						submitHandler: function submitHandler(form) {
							$(form).ajaxSubmit({
								type: "POST",
								data: $(form).serialize(),
								url: "form/process-question.php",
								success: function success() {
									$('.successform', $questionForm).fadeIn();
									$questionForm.get(0).reset();
								},
								error: function error() {
									$('.errorform', $questionForm).fadeIn();
								}
							});
						}
					});
				}
				// Newsletter form
				if (forms.newsletterForm.length) {
					var $newsletterForm = forms.newsletterForm;
					$newsletterForm.validate({
						rules: {
							email: {
								required: true,
								email: true
							}
						},
						messages: {
							email: {
								required: "Please enter your email"
							}
						},
						submitHandler: function submitHandler(form) {
							$(form).ajaxSubmit({
								type: "POST",
								data: $(form).serialize(),
								url: "form/process-newsletter.php",
								success: function success() {
									$('.successform', $newsletterForm).fadeIn();
									$newsletterForm.get(0).reset();
								},
								error: function error() {
									$('.errorform', $newsletterForm).fadeIn();
								}
							});
						}
					});
				}
				// booking form
				if (forms.bookingForm.length) {
					var $bookingForm = forms.bookingForm;
					$bookingForm.validate({
						rules: {
							name: {
								required: true,
								minlength: 2
							},
							message: {
								required: true,
								minlength: 20
							},
							email: {
								required: true,
								email: true
							}

						},
						messages: {
							name: {
								required: "Please enter your name",
								minlength: "Your name must consist of at least 2 characters"
							},
							message: {
								required: "Please enter message",
								minlength: "Your message must consist of at least 20 characters"
							},
							email: {
								required: "Please enter your email"
							}
						},
						submitHandler: function submitHandler(form) {
							$(form).ajaxSubmit({
								type: "POST",
								data: $(form).serialize(),
								url: "form/process-booking.php",
								success: function success() {
									$('.successform', $bookingForm).fadeIn();
									$bookingForm.get(0).reset();
								},
								error: function error() {
									$('.errorform', $bookingForm).fadeIn();
								}
							});
						}
					});
				}
				// request form
				if (forms.requestForm.length) {
					var $requestForm = forms.requestForm;
					$requestForm.validate({
						rules: {
							tname: {
								required: true,
								minlength: 2
							},
							message: {
								required: true,
								minlength: 20
							},
							email: {
								required: true,
								email: true
							}

						},
						messages: {
							tname: {
								required: "Please enter your name",
								minlength: "Your name must consist of at least 2 characters"
							},
							message: {
								required: "Please enter message",
								minlength: "Your message must consist of at least 20 characters"
							},
							email: {
								required: "Please enter your email"
							}
						},
						submitHandler: function submitHandler(form) {
							$(form).ajaxSubmit({
								type: "POST",
								data: $(form).serialize(),
								url: "form/process-request.php",
								success: function success() {
									$('.successform', $requestForm).fadeIn();
									$requestForm.get(0).reset();
								},
								error: function error() {
									$('.errorform', $requestForm).fadeIn();
								}
							});
						}
					});
				}
			});
		})(jQuery);