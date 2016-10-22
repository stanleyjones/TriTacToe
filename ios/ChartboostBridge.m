//
//  ChartboostBridge.m
//  TriTacToe
//
//  Created by Stanley Jones on 10/21/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "ChartboostBridge.h"

@implementation ChartboostBridge

RCT_EXPORT_MODULE('Chartboost');

RCT_EXPORT_METHOD(show:(NSString *)location)
{
  NSLog(@"Pretending to show a Chartboost ad at %@", location);
}

@end
