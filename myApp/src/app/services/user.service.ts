import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    {
      id: 1,
      username: 'Nika Dvalishvili',
      email: 'nika@gmail.com',
      password: 'admin123',
      role: 'admin',
      avatar: this.generateAvatarUrl('Nika Dvalishvili'),
    },
    {
      id: 2,
      username: 'Luka Gulverdashvili',
      email: 'luka@gmail.com',
      password: 'organizer123',
      role: 'organizer',
      avatar: this.generateAvatarUrl('Luka Gulverdashvili'),
    },
    {
      id: 3,
      username: 'Gigi Giorgadze',
      email: 'gigi@gmail.com',
      password: 'user123',
      role: 'user',
      avatar: this.generateAvatarUrl('Gigi Giorgadze'),
    },
    {
      id: 4,
      username: 'Duda Elbakidze',
      email: 'duda@gmail.com',
      password: 'user123',
      role: 'user',
      avatar: this.generateAvatarUrl('Duda Elbakidze'),
    },
    {
      id: 5,
      username: 'Iuri Amoevi',
      email: 'iuri@gmail.com',
      password: 'user123',
      role: 'user',
      avatar: this.generateAvatarUrl('Iuri Amoevi'),
    },
  ];

  private events = [
    {
      id: 1,
      title: 'Let You Go Insane',
      date: 'Tuesday · 22nd January 2024',
      time: '23:00',
      address: '3517 W. Gray St. Utica, Pennsylvania 57867',
      hostName: 'Annette Black',
      followers: '23.5k',
      attendance: 850,
      attenders: 820,
      price: 49.99,
      description:
        'Massive warehouse rave with top international DJs, laser shows, and immersive sound environments across three stages.',
      imageUrl: 'https://fakeimg.pl/400x200/282828/eae0d0/?text=Rave',
      genre: 'Electronic',
      userId: 2,
    },
    {
      id: 2,
      title: 'Linkin Park Celebration',
      date: 'Sunday · 14th February',
      time: '23:00',
      address: '3517 W. Gray St. Utica, Pennsylvania 57867',
      hostName: 'Jerome Bell',
      followers: '23.5k',
      attendance: 1200,
      attenders: 1150,
      price: 79.99,
      description:
        "Ultimate Linkin Park tribute night featuring complete performances of 'Hybrid Theory' and 'Meteora' albums.",
      imageUrl: 'https://fakeimg.pl/400x200/0066ff/ffffff/?text=Linkin+Park',
      genre: 'Rock',
      userId: 1,
    },
    {
      id: 3,
      title: 'EDM Universe 2024',
      date: 'Saturday · 20th February',
      time: '20:00',
      address: '4891 E. Lake Rd. Boston, Massachusetts 02110',
      hostName: 'David Miller',
      followers: '45.2k',
      attendance: 2000,
      attenders: 1950,
      price: 129.99,
      description:
        "Boston's biggest EDM festival with 20+ DJs, pyrotechnics, and next-gen sound systems across multiple stages.",
      imageUrl: 'https://fakeimg.pl/400x200/ff00ff/ffffff/?text=EDM',
      genre: 'Electronic',
      userId: 4,
    },
    {
      id: 4,
      title: 'Rock Legends Night',
      date: 'Friday · 15th March',
      time: '21:00',
      address: '2378 W. Pine St. Nashville, Tennessee 37203',
      hostName: 'Sarah Connor',
      followers: '67.8k',
      attendance: 1800,
      attenders: 1750,
      price: 89.99,
      description:
        'Journey through rock history with tributes to Led Zeppelin, Pink Floyd, and The Doors in one epic night.',
      imageUrl: 'https://fakeimg.pl/400x200/ff0000/ffffff/?text=Rock',
      genre: 'Rock',
      userId: 5,
    },
    {
      id: 5,
      title: 'Jazz & Blues Fusion',
      date: 'Thursday · 28th March',
      time: '19:30',
      address: '1234 Bourbon St. New Orleans, Louisiana 70116',
      hostName: 'Michael Brown',
      followers: '34.1k',
      attendance: 500,
      attenders: 480,
      price: 59.99,
      description:
        "Intimate jazz night featuring local legends and special guest performers from New Orleans' finest venues.",
      imageUrl: 'https://fakeimg.pl/400x200/000066/ffffff/?text=Jazz',
      genre: 'Jazz',
      userId: 1,
    },
    {
      id: 6,
      title: 'Summer Beach Fest',
      date: 'Saturday · 6th July',
      time: '14:00',
      address: '789 Ocean Dr. Miami Beach, Florida 33139',
      hostName: 'Lisa Johnson',
      followers: '89.3k',
      attendance: 3000,
      attenders: 2900,
      price: 0,
      description:
        "Beachfront music festival with live bands, DJ sets, water sports, and food vendors along Miami's iconic shore.",
      imageUrl: 'https://fakeimg.pl/400x200/00ffff/000000/?text=Beach',
      genre: 'Pop',
      userId: 3,
    },
    {
      id: 7,
      title: 'Hip-Hop Underground',
      date: 'Friday · 5th April',
      time: '22:00',
      address: '567 Brooklyn Ave, New York, NY 10019',
      hostName: 'Marcus King',
      followers: '56.7k',
      attendance: 1500,
      attenders: 1450,
      price: 69.99,
      description:
        'Raw underground hip-hop showcase featuring emerging artists, freestyle battles, and live beat-making sessions.',
      imageUrl: 'https://fakeimg.pl/400x200/000000/ffffff/?text=Hip+Hop',
      genre: 'Hip-Hop',
      userId: 1,
    },
    {
      id: 8,
      title: '90s Dance Party',
      date: 'Friday · 19th April',
      time: '21:00',
      address: '456 Club Ave, Los Angeles, CA 90028',
      hostName: 'Tom Richards',
      followers: '34.5k',
      attendance: 900,
      attenders: 880,
      price: 0,
      description:
        'Nostalgic night of 90s dance hits, retro decorations, and themed cocktails. Dress code: 90s fashion!',
      imageUrl: 'https://fakeimg.pl/400x200/ff3300/ffffff/?text=90s',
      genre: 'Pop',
      userId: 1,
    },
    {
      id: 9,
      title: 'Latin Fiesta',
      date: 'Friday · 3rd May',
      time: '22:00',
      address: '123 Salsa Ave, Miami, FL 33127',
      hostName: 'Carlos Rodriguez',
      followers: '67.8k',
      attendance: 1600,
      attenders: 1550,
      price: 59.99,
      description:
        'Hot Latin night featuring live salsa bands, professional dance shows, and salsa lessons for beginners.',
      imageUrl: 'https://fakeimg.pl/400x200/ff9900/ffffff/?text=Latin',
      genre: 'Latin',
      userId: 3,
    },
    {
      id: 10,
      title: 'Rock the Park',
      date: 'Saturday · 10th June',
      time: '18:00',
      address: 'Parkway Ave, Denver, CO 80203',
      hostName: 'Ashley Peterson',
      followers: '80.5k',
      attendance: 2400,
      attenders: 2300,
      price: 0,
      description:
        "Free outdoor rock festival with live bands, food trucks, and craft beer vendors in Denver's scenic park.",
      imageUrl: 'https://fakeimg.pl/400x200/660033/ffffff/?text=Park',
      genre: 'Rock',
      userId: 4,
    },
    {
      id: 11,
      title: 'Indie Acoustic Sessions',
      date: 'Sunday · 11th June',
      time: '16:00',
      address: 'Willow Cafe, Seattle, WA 98103',
      hostName: 'Nathan Grey',
      followers: '12.3k',
      attendance: 200,
      attenders: 180,
      price: 0,
      description:
        'Relaxed afternoon of acoustic performances by indie singer-songwriters. Perfect for coffee lovers.',
      imageUrl: 'https://fakeimg.pl/400x200/996600/ffffff/?text=Acoustic',
      genre: 'Indie',
      userId: 1,
    },
    {
      id: 12,
      title: 'Cultural Beats',
      date: 'Saturday · 12th August',
      time: '12:00',
      address: 'Civic Center, San Diego, CA 92101',
      hostName: 'Global Vibes',
      followers: '45.3k',
      attendance: 1000,
      attenders: 950,
      price: 0,
      description:
        'Celebrate global cultures with music, dance, and cuisines from around the world.',
      imageUrl: 'https://fakeimg.pl/400x200/663300/ffffff/?text=Cultural',
      genre: 'World Music',
      userId: 5,
    },
    {
      id: 13,
      title: 'House of Bounce',
      date: 'Friday · 25th August',
      time: '22:30',
      address: 'Underground Club, Chicago, IL 60654',
      hostName: 'Bounce Crew',
      followers: '50.7k',
      attendance: 1200,
      attenders: 1150,
      price: 49.99,
      description:
        "Chicago's most vibrant house party with top-notch DJs spinning bouncy beats all night.",
      imageUrl: 'https://fakeimg.pl/400x200/9900cc/ffffff/?text=House',
      genre: 'Electronic',
      userId: 1,
    },
    {
      id: 14,
      title: 'Soulful Sunday',
      date: 'Sunday · 1st September',
      time: '14:00',
      address: 'Central Park, Atlanta, GA 30303',
      hostName: 'Soul Movement',
      followers: '30.2k',
      attendance: 600,
      attenders: 580,
      price: 0,
      description:
        "Soul music showcase with local artists performing classic and modern soul hits in Atlanta's iconic park.",
      imageUrl: 'https://fakeimg.pl/400x200/ff6600/ffffff/?text=Soul',
      genre: 'Soul',
      userId: 5,
    },
    {
      id: 15,
      title: 'EDM Galaxy',
      date: 'Saturday · 15th September',
      time: '23:00',
      address: 'Galaxy Arena, Austin, TX 78701',
      hostName: 'Stellar Events',
      followers: '95.2k',
      attendance: 3200,
      attenders: 3100,
      price: 99.99,
      description:
        'High-energy EDM night with international DJs, immersive visuals, and stunning light shows.',
      imageUrl: 'https://fakeimg.pl/400x200/000099/ffffff/?text=Galaxy',
      genre: 'Electronic',
      userId: 1,
    },
    {
      id: 16,
      title: 'Symphony Under Stars',
      date: 'Saturday · 25th May',
      time: '20:00',
      address: '123 Park Ave, Chicago, IL 60601',
      hostName: 'Maria Gonzalez',
      followers: '23.4k',
      attendance: 800,
      attenders: 780,
      price: 0,
      description:
        "Open-air classical concert featuring Beethoven's 9th Symphony with full orchestra and choir.",
      imageUrl: 'https://fakeimg.pl/400x200/000066/ffffff/?text=Symphony',
      genre: 'Soul',
      userId: 1,
    },
    {
      id: 17,
      title: 'Folk & Acoustic',
      date: 'Friday · 31st May',
      time: '19:00',
      address: '456 Mountain Rd, Asheville, NC 28801',
      hostName: 'Lucy Peters',
      followers: '21.7k',
      attendance: 400,
      attenders: 380,
      price: 34.99,
      description:
        'Intimate acoustic evening featuring local folk artists performing original songs and classic covers.',
      imageUrl: 'https://fakeimg.pl/400x200/996633/ffffff/?text=Folk',
      genre: 'Jazz',
      userId: 4,
    },
    {
      id: 18,
      title: 'House Music Marathon',
      date: 'Saturday · 1st June',
      time: '22:00',
      address: '789 Club St, Las Vegas, NV 89101',
      hostName: 'DJ Max Power',
      followers: '92.3k',
      attendance: 2800,
      attenders: 2700,
      price: 0,
      description:
        '12-hour house music experience with rotating international DJs and immersive light installations.',
      imageUrl: 'https://fakeimg.pl/400x200/ff00ff/ffffff/?text=House',
      genre: 'Electronic',
      userId: 5,
    },
    {
      id: 19,
      title: 'Blues & Bourbon',
      date: 'Friday · 7th June',
      time: '20:00',
      address: '321 Bourbon St, New Orleans, LA 70116',
      hostName: 'James Wilson',
      followers: '34.5k',
      attendance: 300,
      attenders: 290,
      price: 0,
      description:
        'Exclusive blues night featuring vintage bourbon tasting and performances by Delta blues legends.',
      imageUrl: 'https://fakeimg.pl/400x200/000099/ffffff/?text=Blues',
      genre: 'Jazz',
      userId: 1,
    },
    {
      id: 20,
      title: 'Pop Divas Tribute',
      date: 'Saturday · 8th June',
      time: '21:00',
      address: '567 Star Ave, Hollywood, CA 90028',
      hostName: 'Diana Ross',
      followers: '56.7k',
      attendance: 1300,
      attenders: 1250,
      price: 0,
      description:
        'Spectacular tribute show celebrating the greatest female pop icons from the 80s to today.',
      imageUrl: 'https://fakeimg.pl/400x200/ff66cc/ffffff/?text=Pop',
      genre: 'Pop',
      userId: 3,
    },
  ];

  constructor() {
    const storedUsers = localStorage.getItem('users');

    if (!storedUsers) {
      localStorage.setItem('users', JSON.stringify(this.users));
    } else {
      const parsedUsers = JSON.parse(storedUsers);
      if (!Array.isArray(parsedUsers) || parsedUsers.length === 0) {
        localStorage.setItem('users', JSON.stringify(this.users));
      }
    }
  }

  getAllUsers(): User[] {
    return this.users.map((user) => ({
      ...user,
      eventCount: this.getEventsByUserId(user.id).length,
    }));
  }

  getUserById(id: number): User | undefined {
    const user = this.users.find((user) => user.id === id);
    if (user) {
      return {
        ...user,
        eventCount: this.getEventsByUserId(user.id).length,
      };
    }
    return undefined;
  }

  private getEventsByUserId(userId: number): any[] {
    return this.events.filter((event) => event.userId === userId);
  }

  private generateAvatarUrl(name: string): string {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(
      name
    )}&size=128`;
  }
}
