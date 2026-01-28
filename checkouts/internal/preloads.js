
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.B4Juc3Bz.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.Bknw9ZFw.js","/cdn/shopifycloud/checkout-web/assets/c1/vendor-legacy.CJTrhHPA.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en-legacy.BGba4UJD.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.Bb0Hny7M.js","/cdn/shopifycloud/checkout-web/assets/c1/AddDiscountButton-legacy.BOcYlVZq.js","/cdn/shopifycloud/checkout-web/assets/c1/NumberField-legacy.BYznf05k.js","/cdn/shopifycloud/checkout-web/assets/c1/useShowShopPayOptin-legacy.CZYJIFgS.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer-legacy.DU9H6o6R.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText-legacy.BYnPAT-a.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice-legacy.BlYv6hk9.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList-legacy.SPKk5ouf.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalPickup-legacy.B8W3yRHI.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName-legacy.DlbkqyBG.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment-legacy.B40wRXCT.js","/cdn/shopifycloud/checkout-web/assets/c1/useAddressManager-legacy.BAl6kD8g.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayPaymentRequiredMethod-legacy.5z-psiQL.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection-legacy.DDHlq-ps.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.D0LP9GX1.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.IMVUFiN2.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview-legacy.C7l_kGCK.js","/cdn/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch-legacy.BRYX2zqr.js","/cdn/shopifycloud/checkout-web/assets/c1/useSuppressShopPayModalOnLoad-legacy.Pjyilv6m.js","/cdn/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger-legacy.BO93SHXQ.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-js-index-legacy.jUcwScRE.js","/cdn/shopifycloud/checkout-web/assets/c1/v4-legacy.On_frbc2.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  