import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { 
  shirt, shirtOutline, heart, heartOutline, chatbubbleEllipses, chatbubbleEllipsesOutline, 
  personCircle, personCircleOutline, compass, compassOutline, notifications, shareSocial, add 
} from 'ionicons/icons';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [RouterModule, IonicModule, CommonModule],
  templateUrl: './features.html',
  styleUrls: ['./features.page.scss']
})
export class FeaturesPage {
  selectedTab: string = 'fashion';
  unreadMessages: number = 5; // Mock count for unread messages

  constructor() {
    // Registering the icons is required for Standalone Components to render ion-icon correctly
    addIcons({
      shirt,
      'shirt-outline': shirtOutline,
      heart,
      'heart-outline': heartOutline,
      compass,
      'compass-outline': compassOutline,
      notifications,
      'share-social': shareSocial,
      add,
      'chatbubble-ellipses': chatbubbleEllipses,
      'chatbubble-ellipses-outline': chatbubbleEllipsesOutline,
      'person-circle': personCircle,
      'person-circle-outline': personCircleOutline
    });
  }

  setCurrentTab(event: any) {
    this.selectedTab = event.tab;
  }
}
