import { UrlHandlingStrategy, UrlTree } from '@angular/router';
export class HybridUrlHandlingStrategy implements UrlHandlingStrategy {
  // use only process the `/new` url
  shouldProcessUrl(url: UrlTree) {
    return url.toString().startsWith('/user') || url.toString().startsWith('/account');
  }

  extract(url: UrlTree) {
    return url;
  }

  merge(url: UrlTree, whole: UrlTree) {
    return url;
  }
}
