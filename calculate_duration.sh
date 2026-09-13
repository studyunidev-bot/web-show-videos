#!/bin/bash
calculate() {
    local total=0
    for url in "$@"; do
        echo "Processing $url"
        dur=$(docker run --rm --entrypoint ffprobe jrottenberg/ffmpeg:4.4-scratch -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$url" 2>/dev/null)
        echo "Duration: $dur"
        total=$(echo "$total + $dur" | bc)
    done
    echo "Total seconds: $total"
    # Format to HH:MM:SS (integer part only)
    total_int=${total%.*}
    h=$((total_int / 3600))
    m=$(((total_int % 3600) / 60))
    s=$((total_int % 60))
    if [ $h -gt 0 ]; then
        echo "Formatted: $h ชั่วโมง $m นาที"
    else
        echo "Formatted: $m นาที $s วินาที"
    fi
}

echo "--- tgat-2 ---"
calculate \
  "https://video.studyunith.com/videos/tgat-2/%E0%B8%82%E0%B9%89%E0%B8%AD%2061-80.mp4" \
  "https://video.studyunith.com/videos/tgat-2/%E0%B8%82%E0%B9%89%E0%B8%AD%2081-100.mp4" \
  "https://video.studyunith.com/videos/tgat-2/%E0%B8%82%E0%B9%89%E0%B8%AD%20101-120.mp4" \
  "https://video.studyunith.com/videos/tgat-2/%E0%B8%82%E0%B9%89%E0%B8%AD%20121-140.mp4"

echo "--- tgat-3 ---"
calculate \
  "https://video.studyunith.com/videos/tgat-3/%E0%B8%82%E0%B9%89%E0%B8%AD%20141-155.mp4" \
  "https://video.studyunith.com/videos/tgat-3/%E0%B8%82%E0%B9%89%E0%B8%AD%20156-170.mp4" \
  "https://video.studyunith.com/videos/tgat-3/%E0%B8%82%E0%B9%89%E0%B8%AD%20171-185.mp4" \
  "https://video.studyunith.com/videos/tgat-3/%E0%B8%82%E0%B9%89%E0%B8%AD%20186-200.mp4"
