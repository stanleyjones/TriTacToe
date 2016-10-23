//
//  ChartboostBridge.m
//  TriTacToe
//
//  Created by Stanley Jones on 10/21/16.
//  Copyright © 2016 Stanley Jones. All rights reserved.
//

#import "ChartboostBridge.h"
#import <Chartboost/Chartboost.h>

@implementation ChartboostBridge

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(showInterstitial)
{
  [Chartboost showInterstitial:CBLocationGameScreen];
}

@end
