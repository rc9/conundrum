import csv
import sys
import dateutil.parser as dp

def csv_to_map(filename):
    user_map = {}
    with open(filename) as csv_file:
        reader = csv.reader(csv_file, delimiter=',')
        for line in reader:
            phone = line[0]
            time = dp.parse(line[4]).strftime('%s')
            body = line[2].lower()
            user_map[(phone, time)] = body
    return user_map

def filter_map_for_starts(user_map):
    time_map = {}
    for key in user_map:
        if (user_map[key] == "ready"):
            if (key[0] not in time_map or time_map[key[0]] > key[1]):
                time_map[key[0]] = key[1]
    return time_map

def get_latest_time_maps(user_map):
    latest_time = {}
    unfinished_time = {}
    for key in user_map:
        if (key[0] not in unfinished_time or unfinished_time[key[0]] < key[1]):
            unfinished_time[key[0]] = key[1]
        if (key[0] not in latest_time or latest_time[key[0]] < key[1]):
            if (user_map[key] == "toxic"):
                latest_time[key[0]] = key[1]
                
    return (latest_time, unfinished_time)

def count_finishers(user_map):
    count = 0
    for key in user_map:
        if(user_map[key] == "toxic"):
            count+=1
            if ('times' in sys.argv):
                print 'user {0} finished at time {1}'.format(key[0], key[1])
    print 'non-unique finishers count was {0}'.format(count)

def time_diffs(starts, ends):
    for key in ends:
        ss = long(ends[key]) - long(starts[key])
        print '{0} finished in {1} minutes'.format(key, ss/60)
        
if(len(sys.argv) < 2):
    print unicode('EROR: You must pass a csv filename')
    exit(1)

filename = sys.argv[1]
maps = csv_to_map(filename)
count_finishers(maps)
starts = filter_map_for_starts(maps)
times = get_latest_time_maps(csv_to_map(filename))

time_diffs(starts,times[0])
