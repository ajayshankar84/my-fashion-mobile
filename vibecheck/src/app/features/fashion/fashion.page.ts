import { Component } from '@angular/core';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.page.html',
  styleUrls: ['./fashion.page.scss'],
})
export class FashionPage {
  categories = ['Party', 'College', 'Date Night', 'Gym', 'Festive'];
  selectedCategory = 'Party';

  feedItems = [
    {
      id: 1,
      title: 'Midnight Rebel',
      curator: 'Aryan',
      tags: ['Oversized Tee', 'Cargo Joggers', 'Chunky Sneakers'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDacpAc4i0O2-qbHlxc8qWjEbkzPXdSkwuNYRrkV19zGO87N-Zc73LLJdKSX-SXi6pfj5wuLIetgagsEbVjvgbLOekh0JVMhgFfylkLooA1GrJrbOomWiRhUdldOC3LzQSUh-q8fBIkY-Hi-8s1m-pyuhL7Trc2aV6iZTsn-5iBXWG08h0DWfsSo0bdoY8PCVYA_uC51aJQVVwmo5b6FXXwfWNxTvOSt-1Z01sNxNwvSG_NccHcSTKHaRICKVrw46KfxSo9cGN-XH0',
      curatorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIX54xX8Ec-plsYN61lnNoVXV6mmAj0PNzc9k1UPvyqBxps1sKcwJ9KQs6HTLY4hsLaJ4d24sF-i0QtqjwGFF4WMpLm9eRTnxUvaTKDwDBqrIRSYAaasimnwkdd56UZnbZFMZjaTfM7Zo3-MldYwouuiHgLK6ZaiHE1bWP08RC69zew-QtstB12oQnfOw8zYI-m3YwgYckXE92btz2nyQtwMYHQHOKxkd1VFgF_cK_P9T858X9O7FtwZ0vvjmUGuDJsMamm2qzDx8',
      liked: true
    },
    {
      id: 2,
      title: 'Cyber Ethnic',
      curator: 'Isha',
      tags: ['Cropped Blazer', 'Mesh Top', 'Violet Trousers'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQxzaVn1xz8GcRkAmhK0hu2Rs-UcGPB7zGPFiqOQl0hCpnpKj6CORSBKHji3Gg773zVxX8nsCPapDDywRxF_cBV1POSQbDku483tAxurhWWiBffgslNnJ1o0ElVitz89JOMG600rUPTXf-LRAfHQETYH1BZrj28OxyPwpvgyy2PCZTdfpp2PNlh0yvuY_NdYioBRBfzyL4ZOT8FYAaYfvZqTTt2vTUK1yqbTpFzAnN9uff_p0t9JJhorF6d0M0QHRpaV3kUuzKNWA',
      curatorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-udNGf2Fx6JWKyb-kbX-2VsrRC3bGzt15nsNgLItAKsgjCdfMHTeUZ4OhZziB8QrFLsoQoWOq4CwFZCjIuCl6Ox5RoJixiuySkCPtRi_rI0JOGL5uWftgKSazwspEl_WGydtsOGnosb20e_RHT1iqKhVYnOWQuXogNfJ2lmBv3ZbGZDNQnmyHrHJwn6cf95tl7hOTXjnfSgrs_8R1G_AdqL30qRnbfKlIRHpU4HIML4kOISYh-RcQkigOsaRXgSv9B0e3YZS1e7k',
      liked: false
    },
    {
      id: 3,
      title: 'Glow Runner',
      curator: 'Kabir',
      tags: ['Teal Set', 'Silver Goggles', 'Tech Runner'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_VAb9N9_fyS5q9NByObHvN3Hkz6dlsOM-TugHMoormzERiEGwLSH-zdlFS60rqPQWn-8J9Fr-NjOEoB7t2AC-bT4oFYMMukLY1oM5yAiLaxQ9IIbzoiS8grs4ffwd-Qc2WSP3nUVSi0O4mPnvhWFGZW62DmAiLBurPTMGhg32rGd0xymt7tAXBeID8JiJW5e3YwUOmuJ4jI228RgSEg73ixuuZv_vOXvE64i6otwFWP3ga_1yVxbBIK5A0ACcSAQt60ucIjfC_vg',
      curatorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBa5-PxnkciarpazL5I6uMxgmrIFn_lTwzoxfqNZ1KFAwk1CSDSZhbzQAl-xvk53UqKq7v-V7E-AMbF83uMvf0WGOL67At_KFt20SiKcrVEpglmZaohIZup_ZkFLzTx6-A9XLKb-2xPyrjPJgWT-0QXBQIqYE9s23shI1pbpil21NFFtNowg8_1Dtl63xoRAe08ANWjOdo1H2Pya_ftwx3V-Zw-0JgM8lPRGWj_Wuzpq7EPEBu_uRtN2lT0MbQWTbiyAYQiRSNx-L8',
      liked: false
    }
  ];

  constructor() {}

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  toggleLike(item: any) {
    item.liked = !item.liked;
  }

  handleRefresh(event: any) {
    console.log('Refreshing fashion feed...');
    
    // Simulate an API call or data reload
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}