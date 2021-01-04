sudo ip link add dummy0 type dummy
sudo ip link set dev dummy0 up
ip link show type dummy
sudo ip addr add 169.254.1.2/32 dev dummy0
sudo ip link set dev dummy0 up
ip addr show dev dummy0