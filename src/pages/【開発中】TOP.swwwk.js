$w.onReady(function () {
	// 以下はWixのカスタム要素のID名に合わせる
    const siteApp = $w('#site-app');
    const topPhotoSection = $w('#topphoto-section');
    const storySection = $w('#story-section');
    const businessSection = $w('#business-section');
    const lifeStyleSection = $w('#lifestyle-section');
    const companySection = $w('#company-section');
    const contactSection = $w('#contact-section');
    const siteHeader = $w('#site-header');
    const SiteFooter = $w('#site-footer');
    const privacyPolicySection = $w('#privacy-policy-section');

	// 強制的に属性をセット（UI設定を上書きします）
    siteApp.setAttribute('tag-name', 'site-app');
	topPhotoSection.setAttribute('tag-name', 'topphoto-section');
	storySection.setAttribute('tag-name', 'story-section');
	businessSection.setAttribute('tag-name', 'business-section');
    lifeStyleSection.setAttribute('tag-name', 'lifestyle-section');
	companySection.setAttribute('tag-name', 'company-section');
	contactSection.setAttribute('tag-name', 'contact-section');
	siteHeader.setAttribute('tag-name', 'site-header');
	SiteFooter.setAttribute('tag-name', 'site-footer');
	privacyPolicySection.setAttribute('tag-name', 'privacy-policy-section');
});